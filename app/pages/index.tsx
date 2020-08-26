import SuperButton from '../components/buttons/SuperButton';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function () {
  return (
    <main>

      <h2>Pages</h2>
      <ul>
        <li>
          <Link href="/another">
            /another
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            /dashboard
          </Link>
        </li>
        <li>
          <Link href="/healthz">
            /healthz
          </Link>
        </li>
      </ul>

      <h2>Components</h2>
      <SuperButton style="okay">HELLO</SuperButton>
      <SuperButton style="error">WORLD</SuperButton>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

    </main>
  )
}
