import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";

class Education extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getEducation();
    }

    render()
    {
        let education=this.props.education.education;
        return (
            <div>
                <h2>Education: </h2>
                {education.map((institute,index) => <Fragment key={index.toString()}> 
                                                            <h4>Institute Name: {institute.name}</h4> <br/>
                                                            Attended from: {institute.start} <br/>
                                                            Attended to: {institute.end} <br/>
                                                            City, State, Country: {institute.city}, {institute.state}, {institute.country} <br/>
                                                            CGPA: {institute.cgpa}
                                                        </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { education: state.education }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getEducation: () => dispatch(actions.getEducation()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);