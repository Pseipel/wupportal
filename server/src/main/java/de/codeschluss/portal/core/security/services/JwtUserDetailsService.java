package de.codeschluss.portal.core.security.services;

import de.codeschluss.portal.core.exception.NotFoundException;
import de.codeschluss.portal.core.security.jwt.JwtUserDetails;
import de.codeschluss.portal.functional.activity.ActivityEntity;
import de.codeschluss.portal.functional.activity.ActivityService;
import de.codeschluss.portal.functional.provider.ProviderEntity;
import de.codeschluss.portal.functional.provider.ProviderService;
import de.codeschluss.portal.functional.user.UserEntity;
import de.codeschluss.portal.functional.user.UserService;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

  private final UserService userService;
  private final ActivityService activityService;

  public JwtUserDetailsService(UserService service, ProviderService providerService,
      ActivityService activityService) {
    this.userService = service;
    this.activityService = activityService;
  }

  @Override
  public JwtUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserEntity user = this.userService.getUser(username);
    List<ProviderEntity> providers = user.getProviderEntities();

    if (providers == null || providers.isEmpty()) {
      return new JwtUserDetails(user, new String[0], new String[0], new String[0]);
    }

    String[] createdActivitiesIds = getCreatedActivities(providers);
    String[] approvedProviderIds = getApprovedProviders(providers);
    String[] orgaAdminIds = getOrgaAdminProviders(providers);

    return new JwtUserDetails(user, approvedProviderIds, orgaAdminIds, createdActivitiesIds);
  }

  private String[] getCreatedActivities(List<ProviderEntity> providers) {
    try {
      List<ActivityEntity> activities = this.activityService.getByProviders(providers);
      return activities == null || activities.isEmpty() ? new String[0]
          : (String[]) activities.stream().map(activity -> activity.getId()).toArray(String[]::new);
    } catch (NotFoundException e) {
      return new String[0];
    }
  }

  private String[] getApprovedProviders(List<ProviderEntity> providers) {
    return mapToOrgas(providers.stream().filter(provider -> provider.isApproved()));
  }

  private String[] getOrgaAdminProviders(List<ProviderEntity> providers) {
    return mapToOrgas(providers.stream().filter(provider -> provider.isAdmin()));
  }

  private String[] mapToOrgas(Stream<ProviderEntity> stream) {
    return stream.map(provider -> provider.getOrganisation().getId()).toArray(String[]::new);
  }
}