import { SITE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

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
            <p className="footer__name">{t.site.name}</p>
            <p className="footer__tag">{t.site.description}</p>
          </div>
        </div>

        <div className="footer__cols">
          <div>
            <h3>{t.footer.visit}</h3>
            <p>{t.site.address}</p>
            <p>{t.site.location}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="footer__map"
            >
              {t.common.getDirections}
            </a>
          </div>

          <div>
            <h3>{t.footer.connect}</h3>
            <ul className="footer__social">
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  {t.common.whatsapp}
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
            <h3>{t.footer.enquire}</h3>
            <p>{t.footer.enquireText}</p>
            <a
              href={SITE.whatsapp}
              className="btn btn-whatsapp footer__wa"
              target="_blank"
              rel="noreferrer"
            >
              {t.common.whatsappUs}
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} {t.site.name}. {t.footer.rights}
          </p>
          <p className="footer__established">
            {t.footer.established} {t.site.established}
          </p>
        </div>
      </div>
    </footer>
  )
}
