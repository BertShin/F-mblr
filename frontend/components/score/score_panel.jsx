import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ScoreIndexItem from './score_index_item';

class Leagues extends React.Component {
  render () {
    let isSelected = this.props.selectedTab;
    let headers = this.props.leagues.map( (league, index) => {
      let title = league.title;
      let currentClass = '';
      if (index === isSelected) {
        currentClass = 'active';
      }

      return (
        <li
          key={index}
          className={currentClass}
          onClick={this.props.chosenTab.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
  }

}


class ScoreIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };

    this.selectTab = this.selectTab.bind(this);
  }


  componentDidMount () {
    this.props.fetchGameData("nba", this.props.desiredDate);
    // Logic for when more than one sport is in season.
    // const allSports = ["nba", nfl", "mlb"];
    // all sports are currently out of season except NBA
    // for (let i = 0; i < allSports.length; i++ ) {
    //   console.logg(this.props.fetchGameData);
    //   this.setState({
    //     [allSports[i]]: this.props.fetchGameData(allSports[i], desiredDate)
    //   });
    // }
  }

  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render () {
    let { scores } = this.props;

    const leagues = [
      {title: 'NBA', content: scores},
      {title: 'NFL', content: [
        {awayScore: "",
          homeScore: "",
          game: {time: "*CONGRATS TO THE EAGLES THIS SEASON*", ID: "500", awayTeam: {Name: "Next Season Starts September 6th."},
          homeTeam:
          {Name: ""}}}
      ]},
      {title: 'MLB', content: [
        {awayScore: "",
          homeScore: "",
          game: {time: "*CONGRATS TO THE ASTROS THIS SEASON*", ID: "501", awayTeam: {Name: "Next Season Starts March 29th."},
          homeTeam:
          {Name: ""}}}
      ]},
      {title: 'TEN', content: [
        {awayScore: "",
          homeScore: "",
          game: {time: "CONGRATS TO FEDERER FOR THE AUSTRALIAN OPEN,", ID: "502", awayTeam: {Name: "No Tennis Data :( QQ "},
          homeTeam:
          {Name: ""}}}
      ]}
    ];
    let league = leagues[this.state.selectedTab];
    return (
      <div className="main-score-index animated flipInY">
        <Leagues
          selectedTab={this.state.selectedTab}
          chosenTab={this.selectTab}
          leagues={leagues}>
        </Leagues>
          <ul className='tab-content'>
            <li>{this.props.desiredDate}</li>
            {
              league.content.map(match =>
                <ScoreIndexItem
                  key={match.game.ID}
                  awayScore={match.awayScore}
                  homeScore={match.homeScore}
                  awayTeam={match.game.awayTeam.Name}
                  homeTeam={match.game.homeTeam.Name}
                  time={match.game.time}
                  isCompleted={match.isCompleted}
                />)
            }
          </ul>
      </div>
    );
  }
}


export default ScoreIndex;
