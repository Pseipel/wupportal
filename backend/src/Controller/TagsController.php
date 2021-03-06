<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;

/**
 * Tags Controller
 *
 * @property \App\Model\Table\TagsTable $Tags
 *
 * @method \App\Model\Entity\Tag[] paginate($object = null, array $settings = [])
 */
class TagsController extends AppController
{

	protected $DEFAULT_SORT = 'Tags.name';

	public function initialize()
	{
		parent::initialize();
		$this->Auth->allow(['view','list', 'index']);
	}

	/**
	 * Add method
	 *
	 * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
	 */
	public function add()
	{
		// var_dump($user); exit;
		$request = $this->request->input('json_decode');
		$query = $this->table()->find()->contain($this->contain());
		$query->where([$this->name . '.name' => $request->name]);

		$result = $query->first();
		return $result
			? $this->ResponseHandler->responseSuccess($result)
			: parent::add();
	}

	/** @return array Fields to use for filter  */
	protected function fieldsTofilter()
	{
		return [
			'name'
		];
	}

	/** @return array Fields to use to filter translations  */
	protected function fieldsTofilterTranslated()
	{
		return [
			$this->table()->translationField('name')
		];
	}

	public function isAuthorized($user)
	{
		if ($this->isSuperuser($user)) return true;

		switch ($this->request->getParam('action')) {
			case 'add':
				return $this->isApprovedProvider($user['id']);
			default:
				return parent::isAuthorized($user);
		}
	}
}
