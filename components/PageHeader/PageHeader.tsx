import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './style.module.scss';

export default function PageHeader({ title }) {
  const router = useRouter();

  const LINKS = [
    {
      link : '/',
      copy : 'Home'
    },
    {
      link : '/about',
      copy : 'About'
    }
  ];
  return (
    <header className={style.PageHeader}>
      <div className="wrapper">
        <div className={style.flexContainer}>
          <h1 className={style.Heading}>{title}</h1>
          <nav className={style.nav}>
            <ul className={style.navList}>
              {
                LINKS.map((item, i) => {
                  return (
                    <li key={i} className={`${style.navItem} ${router.pathname === item.link ? style.active : null}`}>
                      <Link href={item.link}>
                        <a>
                          {item.copy}
                        </a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
