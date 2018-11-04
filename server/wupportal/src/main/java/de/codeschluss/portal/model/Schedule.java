package de.codeschluss.portal.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import de.codeschluss.portal.activity.ActivityEntity;
import de.codeschluss.portal.base.BaseEntity;

/**
 * The persistent class for the schedules database table.
 * 
 */
@Entity
@Table(name = "schedules")
public class Schedule extends BaseEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	private ActivityEntity activity;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "end_date")
	private Date endDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "start_date")
	private Date startDate;

}