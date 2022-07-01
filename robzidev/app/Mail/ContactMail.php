<?php



namespace App\Mail;

//use http\Env\Request;
use App\Http\Requests\ContactMailRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $email;
    public $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ContactMailRequest $request)
    {



        $this->email = $request;

        $this->message = $request->message;




    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()

    {
        return $this->subject('New contact mail from Robzidev')
            ->from($this->email)
            ->to('robert@marketorix.com')
            //->with($this->message)
            ->view('contact-message');
    }


}
