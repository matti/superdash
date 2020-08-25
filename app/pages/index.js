import SuperButton from '../components/buttons/SuperButton';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function () {
  return (
    <main>

      <h2>Pages</h2>
      <ul>
        <li>
          <Link href="/another" color="secondary">
            /another
          </Link>
        </li>
        <li>
          <Link href="/dashboard" color="secondary">
            /dashboard
          </Link>
        </li>
        <li>
          <Link href="/healthz" color="secondary">
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
