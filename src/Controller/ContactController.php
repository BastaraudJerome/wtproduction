<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact_index')]
    public function index(Request $request, MailerInterface $mailer, EntityManagerInterface $em): Response
    {
        //Mise en place du formulaire pour le rendu coté front
        $contact = new Contact();
        $form = $this->createForm(ContactType::class);
        // hydratation du formulaire
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $contactFormData = $form->getData();
            //dd($form->getData());
            $message = (new Email())
                ->from($contactFormData->getEmail())
                ->to('tyss@wtproduction.com')
                ->subject('vous avez reçu un email')
                ->text(
                    'Envoyé par : ' . $contactFormData->getEmail() . \PHP_EOL .
                        'Sujet : ' . $contactFormData->getSujet()
                        . \PHP_EOL . $contactFormData->getMessage(),
                    'text/plain'
                );
            $mailer->send($message);
            $em->persist($form->getData());
            $em->flush();
            $this->addFlash('success', 'Vore message a été envoyé');
            return $this->redirectToRoute('app_contact_index');
        }
        //Renvoi de la vue
        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
