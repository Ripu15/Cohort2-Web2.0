//A 'wrapper component' is a component that takes inner 'react' component(s) as an input or prop
function App() {
  return <div>
    {/* Anything inside 'CardWrapper' is(are) child(ren) */}
    <CardWrapper>
      <CardWrapper>
        <CardWrapper>
          <TextComponent/>
        </CardWrapper>
      </CardWrapper>
    </CardWrapper>
    <b></b>
    <b></b>
    <CardWrapper>
      <b>
        It's the second CARD
      </b>
      <TextComponent/>
    </CardWrapper>
  </div>
 }

//children --> everything written inside , when 'CardWrapper' is rendered in when calling the component as above with input as 'children'
//in above component or function
//so, 'CardWrapper' can be written once but inner logic can be written as needed as in above function or component

//anything mentioned under the below component when calling it,
//is called as children

//card is same like here border drawn
//And children or inner logic can vary
 function CardWrapper({children}){
 //create a div which has a border
 //And inside div, renders the prop(children)
//  Padding would increase the space between the text and the box's border.
// Margin would increase the space between the box and other surrounding boxes or elements.
  return <div style={{border: "2px solid black", padding: 25, margin: 25}}>
    {/* all children are being rendered */}
    {children}
  </div>
 }

 function TextComponent(){
  return <div>
    Hi there from TEXT Component !!! 
  </div>
 }

export default App
