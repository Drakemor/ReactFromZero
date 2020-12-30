import { Grid } from "@material-ui/core";
import CharacterCard from './CharacterCard';

export default function List() {
  return (
    <Grid container spacing={4} style={{padding: "10px"}}>
      <Grid item sm={3}><CharacterCard/></Grid>
      <Grid item sm={3}><CharacterCard/></Grid>
      <Grid item sm={3}><CharacterCard/></Grid>
      <Grid item sm={3}><CharacterCard/></Grid>
    </Grid>
  );
}
