<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * TargetGroups Controller
 *
 * @property \App\Model\Table\TargetGroupsTable $TargetGroups
 *
 * @method \App\Model\Entity\TargetGroup[] paginate($object = null, array $settings = [])
 */
class TargetGroupsController extends AppController
{

	protected $DEFAULT_SORT = 'TargetGroups.name';

	public function initialize()
	{
		parent::initialize();
		$this->Auth->allow(['view','list', 'index']);
	}

}
