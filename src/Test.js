import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            run:true,

            radioButton: {
                check1: false,
                check2: false,
                check3: false,
                check4: false
            }


        }
        this.score=0;
    }

    select(e) {
        
       
        console.log(this.state.run)

        let r=this.state.radioButton;
        for (var key in r) {
            r[key] = false;

        }

        
        r[e.target.id] = true;
       

        this.setState({
            radioButton:r,
            selected: e.target.value
        })
       
       



    }



    submit() {



        
        if (this.state.selected === this.props.data[this.props.count].correct_answer) {
            
            console.log(this.score)
           this.score++;
         
        }

        let radioButton = this.state;
        for (var key in radioButton) {
            radioButton[key] = false;

        }
        this.setState({
            radioButton: radioButton
        })

        console.log(this.state.run)

        this.props.next();



    }

    render() {
        let { data, count, next } = this.props;
        let { radioButton } = this.state;
       
      
        return (
            <div>
                <Typography style={{ marginTop: '20px' }} align="center" variant="h3">QUIZZZ</Typography>
                <hr />

                {data[count] && <Typography align="center" variant="title">{data[count].category}</Typography>}
                {data[count] && <Typography style={{ marginTop: '5px' }} align="center" paragraph>{data[count].question}</Typography>}

                <div style={{ marginLeft: '20%', width: '60%' }}>

                    {data[count] && data[count].incorrect_answers.map((v, i) => {

                       
                        return (

                            <div key={i}> <span>{v}</span> <input id={"check"+parseInt(i+1)} value={data[count].incorrect_answers[i]} checked={radioButton[`check${parseInt(i+1)}`]} onChange={this.select.bind(this)} name="question" type="radio" /> </div>

                        )
                    })
                    }
                    <div>

                        {data[count] && <span>{data[count].correct_answer}</span>}
                        {data[count] && <input id="check4" value={data[count].correct_answer} checked={radioButton.check4} onChange={this.select.bind(this)} name="question" type="radio" />}

                    </div>








                </div>



                {data[count] && <button onClick={this.submit.bind(this)} style={{ marginTop: '30px', height: '25px', width: '60%', marginLeft: '20%' }}>Submit</button>}
                { !data[count] && <h4 style={{textAlign:'center'}}>Your score is {this.score}</h4>}
            </div>
        )
    }
}


// https://opentdb.com/api.php?amount=10