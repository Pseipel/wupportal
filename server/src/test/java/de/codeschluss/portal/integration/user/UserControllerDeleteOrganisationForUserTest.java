package de.codeschluss.portal.integration.user;

import static org.assertj.core.api.Assertions.assertThat;

import org.assertj.core.api.Condition;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import de.codeschluss.portal.functional.organisation.OrganisationEntity;
import de.codeschluss.portal.functional.user.UserController;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserControllerDeleteOrganisationForUserTest {

	@Autowired
    private UserController controller;
	
	@Test
	@WithUserDetails("super@user")
	public void deleteForOtherUserSuperUserOK() {
		String userId = "00000000-0000-0000-0004-900000000000";
		String orgaId = "00000000-0000-0000-0008-800000000000";
		
		assertContaining(userId, orgaId);
		
		controller.deleteOrganisation(userId, orgaId);
		
		assertNotContaining(userId, orgaId);
	}

	@Test
	@WithUserDetails("provider3@user")
	public void deleteOrganisationForOwnUserOK() {
		String userId = "00000000-0000-0000-0004-800000000000";
		String orgaId = "00000000-0000-0000-0008-200000000000";
		
		assertContaining(userId, orgaId);
		
		controller.deleteOrganisation(userId, orgaId);
		
		assertNotContaining(userId, orgaId);
	}
	
	@Test(expected = AccessDeniedException.class)
	@WithUserDetails("provider1@user")
	public void deleteOrganisationForOtherUserDenied() {
		String userId = "00000000-0000-0000-0004-800000000000";
		String providerId = "00000000-0000-0000-0008-300000000000";
		
		controller.deleteOrganisation(userId, providerId);
	}
	
	@Test(expected = AuthenticationCredentialsNotFoundException.class)
	public void deleteOrganisationForOtherUserNotRegisteredDenied() {
		String userId = "00000000-0000-0000-0004-800000000000";
		String providerId = "00000000-0000-0000-0008-300000000000";
		
		controller.deleteOrganisation(userId, providerId);
	}
	
	@SuppressWarnings("unchecked")
	private void assertContaining(String userId, String orgaId) {
		Resources<Resource<OrganisationEntity>> result = (Resources<Resource<OrganisationEntity>>) controller.findOrganisations(userId).getBody();
		assertThat(result.getContent()).haveAtLeastOne(
				new Condition<>(p -> p.getContent().getId().equals(orgaId), "organisation exists"));		
	}

	@SuppressWarnings("unchecked")
	private void assertNotContaining(String userId, String orgaId) {
		Resources<Resource<OrganisationEntity>> result = (Resources<Resource<OrganisationEntity>>) controller.findOrganisations(userId).getBody();
		assertThat(result.getContent()).noneMatch(p -> p.getContent().getId().equals(orgaId));
	}
}
