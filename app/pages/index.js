import SuperButton from '../components/buttons/SuperButton'
import Button from '@material-ui/core/Button';

export default function () {
  return (
    <main>

      <SuperButton style="okay">HELLO</SuperButton>
      <SuperButton style="error">WORLD</SuperButton>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

    </main>
  )
}
