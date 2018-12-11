package de.codeschluss.portal.components.tag;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

import de.codeschluss.portal.core.api.PagingAndSortingAssembler;
import de.codeschluss.portal.core.exception.NotFoundException;
import de.codeschluss.portal.core.service.ResourceDataService;

import java.io.IOException;
import java.util.List;

import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

// TODO: Auto-generated Javadoc
/**
 * The Class TagService.
 * 
 * @author Valmir Etemi
 *
 */
@Service
public class TagService extends ResourceDataService<TagEntity, TagQueryBuilder> {

  /**
   * Instantiates a new tag service.
   *
   * @param repo
   *          the repo
   * @param assembler
   *          the assembler
   */
  public TagService(
      TagRepository repo, 
      PagingAndSortingAssembler assembler,
      TagQueryBuilder entities) {
    super(repo, entities, assembler);
  }

  @Override
  public TagEntity getExisting(TagEntity newTag) {
    return repo.findOne(entities.withName(newTag.getName())).orElse(null);
  }

  /**
   * Gets the resources by activity.
   *
   * @param activityId the activity id
   * @return the resources by activity
   * @throws JsonParseException the json parse exception
   * @throws JsonMappingException the json mapping exception
   * @throws IOException Signals that an I/O exception has occurred.
   */
  public Resources<?> getResourcesByActivity(String activityId) 
      throws JsonParseException, JsonMappingException, IOException {
    List<TagEntity> tags = repo.findAll(entities.withAnyActivityId(activityId));
    if (tags == null || tags.isEmpty()) {
      throw new NotFoundException(activityId);
    }
    return assembler.entitiesToResources(tags, null);
  }

  @Override
  public TagEntity update(String id, TagEntity newTag) {
    return repo.findById(id).map(tag -> {
      tag.setName(newTag.getName());
      tag.setDescription(newTag.getDescription());
      return repo.save(tag);
    }).orElseGet(() -> {
      newTag.setId(id);
      return repo.save(newTag);
    });
  }
}
