package de.codeschluss.portal.components.images.organisation;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import de.codeschluss.portal.components.organisation.OrganisationController;
import de.codeschluss.portal.core.common.PagingAndSortingAssembler;

import java.util.ArrayList;
import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.stereotype.Service;

/**
 * The Class OrganisationImageResourceAssembler.
 * 
 * @author Valmir Etemi
 *
 */
@Service
public class OrganisationImageResourceAssembler 
    extends PagingAndSortingAssembler<OrganisationImageEntity> {

  /* (non-Javadoc)
   * @see de.codeschluss.portal.core.common
   * .PagingAndSortingAssembler#createResourceLinks(de.codeschluss.portal.core.common.BaseEntity)
   */
  @Override
  protected List<Link> createResourceLinks(OrganisationImageEntity image) {
    List<Link> links = new ArrayList<Link>();

    links.add(linkTo(methodOn(OrganisationController.class)
        .findImages(image.getOrganisation().getId())).withSelfRel());

    return links;
  }

}
