package de.codeschluss.portal.organisation;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import org.springframework.hateoas.core.Relation;

import com.fasterxml.jackson.annotation.JsonIgnore;

import de.codeschluss.portal.base.BaseEntity;
import de.codeschluss.portal.model.Address;
import de.codeschluss.portal.provider.ProviderEntity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * The persistent class for the organisations database table.
 * 
 */
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@Entity
@Table(name = "organisations")
@Relation(collectionRelation = "data")
public class OrganisationEntity extends BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Lob
	private String description;

	@Lob
	private byte[] image;

	private String mail;
	
	private String name;

	private String phone;

	private String website;
	
	@ManyToOne
	@JsonIgnore
	private Address address;

	@OneToMany(mappedBy = "organisation")
	@JsonIgnore
	private List<ProviderEntity> providers;
}