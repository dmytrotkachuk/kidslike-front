import React from 'react';
import InformationByHabbit from '../InformationByHabbit/InformationByHabbit';
import { connect } from 'react-redux';
import habbitOperation from '../../redux/operations/habbitOperation';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import transitionGroup from './transitionGroup.module.css';

class ContainerForAllHabbits extends React.Component {
  componentDidMount() {
    this.props.getAllHabbitsByUser();
  }

  render() {
    const { allHabbits } = this.props;
    return (
      allHabbits.length > 0 && (
        <TransitionGroup component="ul">
          {allHabbits.map((el) => (
            <CSSTransition
              appear={true}
              timeout={300}
              classNames={transitionGroup}
              key={el._id}
            >
              <InformationByHabbit key={el._id} id={el._id} habbit={el} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  allHabbits: state.habbits,
});

const mapDispatchToProps = {
  getAllHabbitsByUser: habbitOperation.getAllHabbitsByUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerForAllHabbits);

// ============= For ownProps in InformationByHabbit, without CSSTransition
// render() {
//   const { allHabbits } = this.props;
//   return (
//     allHabbits.length > 0 &&
//     allHabbits.map((el) => <InformationByHabbit key={el._id} id={el._id} />)
//   );
// }
