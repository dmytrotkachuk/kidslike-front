import React, { Component } from 'react';
// import {connect} from 'react-redux'
import style from './pressentForm.module.scss';
import closeBtn  from "../../assets/images/close.svg";
import ballImg from "../../assets/images/changeHabbitStar.png";
import tringl from '../../assets/images/changeHabbitSelect.png'
import deleteBtn from '../../assets/images/Vector-1.svg'



class AddFormPresent extends Component {
    state={
        namePresent:'',  //запрос на сервер в поиске подарков 
        ball:0,  // this.props.ball
        choseChild:'',  //this.props.child
        childrens:[ 'Masha', 'Sasha' ],  //заглушка детей )// axios or fetcc
    };

    componentDidMount(){
            // this.setState({childrens:this.props})// сюда должны прийти пропы детей
    }

    handleChangeName = (e) => {
        this.setState({namePresent:e.target.value})
    }    
    handleChangeBall = (e) => {
        this.setState({ball:e.target.value})
    }

    handleChoseChild = e => {
        this.setState({choseChild:e.target.value})
    }
    handleCloseWindow = (e) =>{
       // если закрыть окно должны передать пропы false
    };

    handleSubmit = e => {
        e.preventDefault();

        // const {namePresent, ball, choseChild} = this.state

        // this.props.onAddPresent({namePresent,ball,choseChild})

        // this.setState({namePresent:'',ball:'',choseChild:''})
    }

    render(){
        const {childrens,namePresent ,choseChild} = this.state 

        return (
            <div className={style.container_presents}>
                <button className={style.container_presents__close}
                type='button'
                onClick={this.handleCloseWindow}
                > 
                     <img src={closeBtn}/>
                </button>
               
                <form className={style.present_form}  onSubmit={this.handleSubmit} >
                     <p className={style.present_form__title}>Редагування подарунку</p>

                    <label className={style.present_form__label}> Назва
                         <input 
                         className={style.present_form__input}
                         placeholder="Введіть назву"
                         value={namePresent}
                         onChange={this.handleChangeName}
                         />
                    </label>

                    <label className={style.present_form__label}>Призначення подарунку
                           <img src={tringl} className={style.present_form__change_child}  />
                           <div className={style.present_form__change_child_block}  ></div>
                           <select  onChange={this.handleChoseChild} value={choseChild} className={style.present_form__input} >
                            {
                             childrens.map(child =>  {<option  value={child}> {child} </option>} )   
                            }
                           </select>
                    </label>

                    <label className={style.present_form__label}>Бал
                        <img src={ballImg} className={style.present_form__ball_star} />
                      
                        <input
                        className={style.present_form__ball}
                        id="grade"
                        type="number"
                        min="0"
                        max="99"
                        placeholder="00"
                        onChange={this.handleChangeBall}
                        />
                     </label>
                
                     <label className={style.present_form__label}>Завантажити фото (необов’язково)

                        <div className={style.present_form__upload_box}>
                        <input type="file" className={style.present_form__upload_box_input} />
                        <p className={style.present_form__upload_box_text}> Оберіть файл </p>
                        <span className={style.present_form__upload_box_btn} > Обрати </span>
                        </div>
                    </label>

                    <div className={style.present_form__box_botton}>
                        <button className={style.present_form__box_botton__save}  
                            type="submit" > Зберегти </button>
                        <button 
                            className={style.present_form__box_botton__canceling}
                            type='button'
                            onClick={this.handleCloseWindow}
                        > Видмина </button>

                    </div>
                </form>
            </div>
        )
    };
}


const mapDispatchToProps = {
    // onAddPresent:constOperation.addTask// Operation  to do 
}


// export default connect(null,mapDispatchToProps)(AddFormPresent)
export default AddFormPresent;



