import { Typography, Card, CardContent } from '@material-ui/core'

export default function Landing() {
  return <Card style={{margin: "10px"}}>
    <CardContent>
      <Typography component="h2" variant="h5">
        Hello world
      </Typography>
      <Typography component="subtitle1" paragraph>
        This is a message to welcome you here!
      </Typography>
    </CardContent>
  </Card>
}
