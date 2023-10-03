function Student(props){
    console.log(props)
    return(
        <div style={{backgroundColor: 'aquamarine',margin:20 } }>
        <h1>hello from {props.name}</h1>
        <h2>Email id: {props.email}</h2>
        <h4><i>Address:</i> {props.other.address}</h4>
        <h3>mobile: {props.other.mobile }</h3>
        </div>
    )   
}
export default Student; 