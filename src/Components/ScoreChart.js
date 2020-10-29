// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { Doughnut } from 'react-chartjs-2';


// export default class VoteTallyChart extends React.Component {
//   render() {
//     console.log(tallyVotes(this.props.votes))
//     return (
//       <div>
//       <Card style={{backgroundColor: "#000058", paddingBottom: "2%"}}>
//       <Doughnut
//                 data={
//                   {labels: tallyVotes(this.props.votes).map(tally => tally.name),
//                     datasets: [
//                     {
//                       label: "Votes",
//                       backgroundColor: ["#0dba86", "#00e6e6", "#ff4500", "#e6003a"],
//                       borderColor: "#ffff1b",
//                       borderWidth: 1,
//                       data: tallyVotes(this.props.votes).map(tally => tally.total)
//                     }
//                   ]}
//                 }
//                     options={{
//                       title:{
//                         display:true,
//                         text:'Votes',
//                         fontColor:"#ffff1b",

//                         fontSize:30,
//                       },
//                       legend:{
//                         display:true,
//                         position:'left'
//                       }
//                     }}
//                     />
//         </Card>
//         </div>
//         );
//       }}