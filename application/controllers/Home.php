<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$data['title'] = "Beehon";
		$this->form_validation->set_rules("fullname", '', 'required',[
			'required' => "FullName tidak boleh kosong !"
		]);
		$this->form_validation->set_rules("email", '', 'required',[
			'required' => "Email tidak boleh kosong !"
		]);
		$this->form_validation->set_rules("message", '', 'required',[
			'required' => "Message tidak boleh kosong !"
		]);

		if($this->form_validation->run() == false ){
			$this->load->view('home/index', $data);
		}else{
			$data = [
				'fullname' => htmlspecialchars( $this->input->post("fullname", true) ),
				'email' => htmlspecialchars( $this->input->post("email", true) ),
				'message' => htmlspecialchars( $this->input->post("message", true) ),
				'created_date' => time()
			];

			$this->db->insert("customer", $data);
			$this->session->set_flashdata("home", 
			'<div class="alert alert-primary" role="alert">
				Selamat Kawan, Pesan Berhasil terkirim .  
				</div>');
			
			redirect("");
		}
	}
}
