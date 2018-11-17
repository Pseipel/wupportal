package de.codeschluss.portal.functional.schedule;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.util.ArrayList;
import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.codeschluss.portal.core.common.PagingAndSortingAssembler;
import de.codeschluss.portal.functional.activity.ActivityController;

@Service
@Transactional
public class ScheduleResourceAssembler extends PagingAndSortingAssembler<ScheduleEntity> {

	@Override
	protected List<Link> createResourceLinks(ScheduleEntity schedule) {
		List<Link> links = new ArrayList<Link>();
		
		links.add(linkTo(methodOn(ActivityController.class).findSchedules(schedule.getActivity().getId())).withSelfRel());
		
		return links;
	}
}