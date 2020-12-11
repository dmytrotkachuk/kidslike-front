import React, { Component, useEffect } from 'react';
import InformItemByPresent from './InformItemByPresent';
import present from '../../assets/informationByPresent/image 16.svg';
import style from './informListByPresent.module.css';
import trStyle from './trStyle.module.css';
import { connect } from 'react-redux';
import presentSelector from '../../redux/selectors/presentSelector';
import operationPresent from '../../redux/operations/presentOperation';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const InformationListByPresent = ({
  presents,
  getPresents,
  deletePresent,
  buyPresent,
}) => {
  useEffect(() => {
    getPresents();
  }, []);

  return (
    <div className={style.presentItem_container}>
<<<<<<< HEAD
      <ul className={style.presentItem_childrens}>
        {presents &&
          presents.map((present) => (
=======
        {presents && (
        <TransitionGroup component="ul" className={style.presentItem_childrens}>
          {presents.map((present) => (
>>>>>>> 669893305d1f4c7f3243c09f50f2f9b26e024755
            <li className={style.presentItem_item} key={present._id}>
              <CSSTransition
                    in={true}
                    appear={true}
                    classNames={trStyle}
                    key={present._id}
                    timeout={250}
                  >
              <InformItemByPresent
                idPresent={present._id}
                childId={present.childId}
                gender={present.gender}
                reward={present.reward}
                title={
                  present.title.length > 13
                    ? `${present.title.slice(0, 13)}...`
                    : present.title
                }
                image={present.image}
                deletePresent={deletePresent}
                buyPresent={buyPresent}
              />
              </CSSTransition>
            </li>
          ))}
<<<<<<< HEAD
      </ul>
=======
          </TransitionGroup>
        )}
>>>>>>> 669893305d1f4c7f3243c09f50f2f9b26e024755
    </div>
  );
};

const mapStateToProps = (state) => ({
  presents: presentSelector.getPresents(state),
});

const mapDispatchToProps = {
  getPresents: operationPresent.getAllPresents,
  deletePresent: operationPresent.removePresent,
  buyPresent: operationPresent.buyPresentById,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationListByPresent);
