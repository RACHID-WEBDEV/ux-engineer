/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer';

export default async (req, res) => {
    const { name, email, message, phone, subject } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: email,
            to: 'rachidwebdev@gmail.com',
            subject: `Contact Form Submission From ${name}`,
            html: `  
            
            
<p>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>RACHID Portfolio Email Template</title>
    <link rel="stylesheet" href="email.css" />
    <style>    

      img {
            border: none;
        - ms - interpolation - mode: bicubic;
        max - width: 100 %;
    }

      body {
        background - color: #f6f6f6;
        font - family: sans - serif;
        -webkit - font - smoothing: antialiased;
        font - size: 14px;
        line - height: 1.4;
        margin: 0;
        padding: 0;
        -ms - text - size - adjust: 100 %;
        -webkit - text - size - adjust: 100 %;
    }

      table {
        border - collapse: separate;
        mso - table - lspace: 0pt;
        mso - table - rspace: 0pt;
        width: 100 %;
    }
      table td {
        font - family: sans - serif;
        font - size: 14px;
        vertical - align: top;
    }

    

      .body {
        background - color: #f6f6f6;
        width: 100 %;
    }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto!important;
        /* makes it centered */
        max - width: 580px;
        padding: 10px;
        width: 580px;
    }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box - sizing: border - box;
        display: block;
        margin: 0 auto;
        max - width: 580px;
        padding: 10px;
    }

   
      .main {
        background: #ffffff;
        border - radius: 3px;
        width: 100 %;
    }

      .wrapper {
        box - sizing: border - box;
        padding: 20px;
    }

      .content - block {
        padding - bottom: 10px;
        padding - top: 10px;
    }

      .footer {
        clear: both;
        margin - top: 10px;
        text - align: center;
        width: 100 %;
    }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #999999;
        font - size: 12px;
        text - align: center;
    }


    h1,
        h2,
        h3,
        h4 {
        color: #000000;
        font - family: sans - serif;
        font - weight: 400;
        line - height: 1.4;
        margin: 0;
        margin - bottom: 30px;
    }

      h1 {
        font - size: 35px;
        font - weight: 300;
        text - align: center;
        text - transform: capitalize;
    }

    p,
        ul,
        ol {
        font - family: sans - serif;
        font - size: 14px;
        font - weight: normal;
        margin: 0;
        margin - bottom: 15px;
    }
      p li,
        ul li,
            ol li {
        list - style - position: inside;
        margin - left: 5px;
    }

      a {
        color: #3498db;
        text - decoration: underline;
    }

      .btn {
        box - sizing: border - box;
        width: 100 %;
    }
      .btn > tbody > tr > td {
        padding - bottom: 15px;
    }
      .btn table {
        width: auto;
    }
      .btn table td {
        background - color: #ffffff;
        border - radius: 5px;
        text - align: center;
    }
      .btn a {
        background - color: #ffffff;
        border: solid 1px #3498db;
        border - radius: 5px;
        box - sizing: border - box;
        color: #3498db;
        cursor: pointer;
        display: inline - block;
        font - size: 14px;
        font - weight: bold;
        margin: 0;
        padding: 12px 25px;
        text - decoration: none;
        text - transform: capitalize;
    }

      .btn - primary table td {
        background - color: #3498db;
    }

      .btn - primary a {
        background - color: #3498db;
        border - color: #3498db;
        color: #ffffff;
    }

    
      .last {
        margin - bottom: 0;
    }

      .first {
        margin - top: 0;
    }

      .align - center {
        text - align: center;
    }

      .align - right {
        text - align: right;
    }

      .align - left {
        text - align: left;
    }

      .clear {
        clear: both;
    }

      .mt0 {
        margin - top: 0;
    }

      .mb0 {
        margin - bottom: 0;
    }

      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max - height: 0;
        max - width: 0;
        opacity: 0;
        overflow: hidden;
        mso - hide: all;
        visibility: hidden;
        width: 0;
    }

      .powered - by a {
        text - decoration: none;
    }

      hr {
        border: 0;
        border - bottom: 1px solid #f6f6f6;
        margin: 20px 0;
    }

    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and(max - width: 620px) {
        table.body h1 {
            font - size: 28px!important;
            margin - bottom: 10px!important;
        }
        table.body p,
            table.body ul,
                table.body ol,
                    table.body td,
                        table.body span,
                            table.body a {
            font - size: 16px!important;
        }
        table.body.wrapper,
            table.body.article {
            padding: 10px!important;
        }
        table.body.content {
            padding: 0!important;
        }
        table.body.container {
            padding: 0!important;
            width: 100 % !important;
        }
        table.body.main {
            border - left - width: 0!important;
            border - radius: 0!important;
            border - right - width: 0!important;
        }
        table.body.btn table {
            width: 100 % !important;
        }
        table.body.btn a {
            width: 100 % !important;
        }
        table.body.img - responsive {
            height: auto!important;
            max - width: 100 % !important;
            width: auto!important;
        }
    }

    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
        .ExternalClass {
            width: 100 %;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line - height: 100 %;
        }
        .apple - link a {
            color: inherit!important;
            font - family: inherit!important;
            font - size: inherit!important;
            font - weight: inherit!important;
            line - height: inherit!important;
            text - decoration: none!important;
        }
        #MessageViewBody a {
            color: inherit;
            text - decoration: none;
            font - size: inherit;
            font - family: inherit;
            font - weight: inherit;
            line - height: inherit;
        }
        .btn - primary table td:hover {
            background - color: #34495e!important;
        }
        .btn - primary a:hover {
            background - color: #34495e!important;
            border - color: #34495e!important;
        }
    }
    </style>
</HEAD>
<BODY >
<table role="presentation" border="0" cellPadding={0} cellSpacing={0} className="body">
      <tbody>
      <tr>
        <td> 
        </td>
        <td className="container">
          <div className="content">
          
            <table role="presentation" className="main">
            
              <tbody><tr>
                <td className="wrapper">
                  <table role="presentation" border="0" cellPadding={0} cellSpacing={0}>
                    <tbody><tr>
                      <td>
                        <table cellPadding={0} cellSpacing={0} className="outlookFallback" style={{ width: "100%", minWidth: "100%", backgroundColor: "#06103c" }}>
                          <tbody><tr>
                            <td style={{ padding: "10px 5px" }}>
                              <table cellPadding={0} cellSpacing={0} className="outlookFallback" style={{ width: "100%", minWidth: "100%" }}>
                                <tbody><tr>
                                  <td align="left" valign="top" style={{ width: 184, minWidth: 184, height: 50, minHeight: 50 }}>
                                    <img src="https://i.ibb.co/7vkHnGD/rachid-logo.png" style={{ maxWidth: 184, maxHeight: 95 }} height="52" />
                                  </td>
                                  <td align="right" valign="top" style={{ whiteSpace: "nowrap", paddingRight: 10 }}>
                                    <span style={{ color: "#ffffff", fontSize: 16, whiteSpace: "nowrap", display: "block", marginTop: 14 }}>New Email! 🔔</span>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 40 }}>
                          <img width="282" height="223" src="https://i.ibb.co/cXDYRh1/rachimail.png" />
                        </span>

                        <p style={{ marginTop: 20 }}>
                          Hi there, you got a new message
                        </p>
                        <p style={{ fontSize: 24 }}>
                          <b>Message From : ${name} </b>
                        </p>

                        <div style={{ padding: "20px 5px", backgroundColor: "#ebebeb" }}>
                          <p>
                            Name:
                            <a href="#" style={{ color: "#4ba8dc", textDecoration: "none" }}><b>${name}</b></a>
                          </p>

                          <p>
                            Email:
                            <b><a href="#" style={{ color: "#000", textDecoration: "none" }}>${email}</a></b>
                          </p>

                          <p>
                            Phone Number:
                            <a href="tel:${phone}" style={{ color: "#4ba8dc", textDecoration: "none" }}><b>${phone}</b></a>
                          </p>

                          <p>
                            Subject:
                            <b><a style={{ color: "#000", textDecoration: "none" }}>${subject}</a></b>
                          </p>

                          <p>
                            Message:
                            <b><a style={{ color: "#000", textDecoration: "none" }}>${message}</a></b>
                          </p>
                        </div>
                        <table role="presentation" border="0" style={{ marginTop: 20 }} cellPadding={0} cellSpacing={0} className="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="left">
                                <table role="presentation" border="0" cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a target="_blank" href="mailto:${email}">Reply Sender Email
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p><b>Looking for a Quick Reply?</b></p>

                        <table role="presentation" border="0" cellPadding={0} cellSpacing={0} className="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="left">
                                <table role="presentation" border="0" cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="tel:${phone}" target="_blank">Call Sender Now</a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          Good luck! Now go and Build Something Unique and
                          Creative.
                        </p>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>

             
            </tbody></table>
        

             <div className="footer">
              <table role="presentation" border="0" cellPadding={0} cellSpacing={0}>
                <tbody><tr>
                  <td className="content-block">
                    <span className="apple-link">With ❤️ from RACHID. Don't know who we are? We're the
                      humans behind your Portfolio!</span>
                    <br />
                    <br />
                    Want to know more about us? Check out
                    <a href="https://rachid.vercel.app" style={{ color: "#4ba8dc", textDecoration: "none" }}>www.rachid.com</a>
                  </td>
                </tr>
                <tr>
                  <td className="content-block powered-by">
                    <span style={{ fontSize: 12, fontWeight: "400" }}>© 2022 RACHID-WEBDEV. All rights reserved.</span>
                  </td>
                </tr>
              </tbody></table>
            </div>
           
          </div>
        </td>
        <td> </td>
      </tr>
    </tbody>
    </table>
</BODY>
</HTML>
</p>
        
        `
        });

        console.log('Message Sent', emailRes.messageId);
    } catch (err) {
        console.log(err);
    }

    res.status(200).json(req.body)
}

