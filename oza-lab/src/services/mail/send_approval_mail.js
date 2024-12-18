import nodemailer from 'nodemailer'
// import TokenRepository from '../../domain/token/token.repository.js'

export async function SendApprovalMail (req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ozalab.original@gmail.com',
      pass: 'ehdoomlouqhnkhwu'
    }
  })

  // define email options
  const mailOptions = {
    from: 'ozalab.original@gmail.com',
    to: `${req.body.email.toLowerCase()}`,
    subject: 'OZA LAB: HomeVisit request response',
    html: `<p>Your Request for Home Visit on Date ${req.body.bookingDate} for test ${req.body.testName} is ${req.body.approved}.</p>`
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.json({ message: 'Error While sending email', info })
    } else {
      console.log('Email sent: ' + info.response)
      return res.json({ message: 'email sent successfully', info, sent: true })
    //   return { message: 'email sent successfully' }
    }
  })
}
