package de.codeschluss.portal.security.permissions;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import org.springframework.security.access.prepost.PreAuthorize;

@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("@authorizationService.isOwnUser(authentication, #userId) or @authorizationService.isSuperUser(authentication)")
public @interface OwnOrSuperUserPermission {

}
