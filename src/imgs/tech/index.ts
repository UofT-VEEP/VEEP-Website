import C from './c.png'
import CSS from './css.jpg'
import EXCEL from './excel.png'
import HTML from './html.jpg'
import JAVA from './java.png'
import JS from './js.png'
import MSACCESS from './msAccess.jpg'
import NODE from './node.jpg'
import POSTGRES from './postgres.jpg'
import PYTHON from './python.jpg'
import REACT from './react.jpg'
import SQL from './sql.png'
import TS from './ts.png'
import MONGODB from './mongodb.png'
import REDUX from './redux.jpg'
import FLASK from './flask.png'

import { Tech } from 'types/projects'

export const techLogoMap: Record<Tech, string> = {
  [Tech.C]: C,
  [Tech.CSS]: CSS,
  [Tech.EXCEL]: EXCEL,
  [Tech.HTML]: HTML,
  [Tech.JAVA]: JAVA,
  [Tech.JAVASCRIPT]: JS,
  [Tech.MSACCESS]: MSACCESS,
  [Tech.NODE]: NODE,
  [Tech.POSTGRES]: POSTGRES,
  [Tech.PYTHON]: PYTHON,
  [Tech.SQL]: SQL,
  [Tech.REACT]: REACT,
  [Tech.TYPESCRIPT]: TS,
  [Tech.MONGODB]: MONGODB,
  [Tech.REDUX]: REDUX,
  [Tech.FLASK]: FLASK,
}

export const techToWebsiteMap: Record<string, string> = {
  [Tech.C]: 'https://en.wikipedia.org/wiki/Objective-C',
  [Tech.CSS]: 'https://en.wikipedia.org/wiki/CSS',
  [Tech.EXCEL]: 'https://www.microsoft.com/en-us/microsoft-365/excel',
  [Tech.HTML]: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  [Tech.JAVA]: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
  [Tech.JAVASCRIPT]: 'https://www.javascript.com/',
  [Tech.MSACCESS]: 'https://en.wikipedia.org/wiki/Microsoft_Access',
  [Tech.NODE]: 'https://nodejs.org/en/about/',
  [Tech.POSTGRES]: 'https://www.postgresql.org/',
  [Tech.PYTHON]: 'https://www.python.org/',
  [Tech.SQL]: 'https://en.wikipedia.org/wiki/SQL',
  [Tech.REACT]: 'https://reactjs.org/',
  [Tech.TYPESCRIPT]: 'https://www.typescriptlang.org/',
  [Tech.MONGODB]: 'https://www.mongodb.com/',
  [Tech.REDUX]: 'https://react-redux.js.org/',
  [Tech.FLASK]: 'https://palletsprojects.com/p/flask/',
}
