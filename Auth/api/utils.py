from django.conf import settings
from django.core.mail import send_mail



def send_account_activation_email(email, uid, username):
    subject = 'Verification'
    
    # HTML content as a string
    html_message = f"""
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
</head>
<body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <h1 style="color: #007BFF; text-align: center;">Bookify Email Verification</h1>

        <p style="font-size: 16px;">Hello {username},</p>

        <p style="font-size: 16px;">You registered an account on Bookify. Before being able to use your account, you need to verify that this is your email address by clicking the following link:</p>

        <p style="text-align: center; margin-top: 20px;">
            <a href="http://localhost:5173/user/verify/{uid}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email Address</a>
        </p>

        <p style="font-size: 16px; text-align: center; margin-top: 20px;">Kind Regards,<br>Bookify</p>

    </div>

</body>
</html>
    """
    
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email, ]
    
    # Send email with HTML content
    send_mail(subject, None, email_from, recipient_list, html_message=html_message)

    
    
    