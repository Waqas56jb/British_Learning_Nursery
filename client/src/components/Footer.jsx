import { SITE } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src="/logo.png" alt="" className="footer__logo" />
          <div>
            <p className="footer__mark">
              <span>B</span>
              <span>L</span>
              <span>N</span>
            </p>
            <p className="footer__name">{SITE.name}</p>
            <p className="footer__tag">{SITE.description}</p>
          </div>
        </div>

        <div className="footer__cols">
          <div>
            <h3>Visit</h3>
            <p>{SITE.address}</p>
            <p>{SITE.location}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="footer__map"
            >
              Get directions
            </a>
          </div>

          <div>
            <h3>Connect</h3>
            <ul className="footer__social">
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.tiktok} target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </li>
              <li>
                <a href={SITE.linktree} target="_blank" rel="noreferrer">
                  Linktree
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Enquire</h3>
            <p>Book a tour or ask about admissions — we will update phone details soon.</p>
            <a href={SITE.whatsapp} className="btn btn-whatsapp footer__wa" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="footer__established">Established {SITE.established}</p>
        </div>
      </div>
    </footer>
  )
}
