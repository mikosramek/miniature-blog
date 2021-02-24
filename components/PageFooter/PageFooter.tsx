import style from './style.module.scss';

export default function PageFooter() {
  const SOCIALS = [
    {
      link : 'https://twitter.com/mikosramek',
      copy : 'Twitter'
    },
    {
      link : 'https://github.com/mikosramek',
      copy : 'Github'
    }
  ]

  return (
      <footer className={style.footer}>
        <div className="wrapper">
          <div className={style.flexContainer}>
            <nav className={style.navContainer}>
              <ul className={style.navList}>
                {
                  SOCIALS.map((profile, i) => {
                    return (
                        <li className={style.navItem} key={i}>
                          <a href={profile.link} target="_blank" className={style.link}>
                            {profile.copy}
                          </a>
                        </li>
                    );
                  })
                }
              </ul>
            </nav>
            <span>
                      Miko Sramek © 2021
                    </span></div>
        </div>
      </footer>
  )
}
