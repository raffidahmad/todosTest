import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AssemblyLine from './components/AssemblyLine';
import Stage from './components/Stage';
function App() {
  const [stages, setStages] = useState([
    {
      name: "Assembly",
      items: ["item1", "item2", "item3"],
    },
    {
      name: "Stage 1",
      items: [],
    },
    {
      name: "Stage 2",
      items: [],
    },
    {
      name: "Stage 3",
      items: [],
    },
    {
      name: "Stage 4",
      items: [],
    },
  ]);


  //move item to next stage
  function moveItem(stageIndex, itemIndex) {
    const stage = stages[stageIndex];
    const item = stage.items[itemIndex];
    const newStages = [...stages];
    newStages[stageIndex].items.splice(itemIndex, 1);
    newStages[stageIndex + 1].items.push(item);
    setStages(newStages);
  }

  //move item to previous stage
  function moveItemBack(stageIndex, itemIndex) {
    const stage = stages[stageIndex];
    const item = stage.items[itemIndex];
    const newStages = [...stages];
    newStages[stageIndex].items.splice(itemIndex, 1);
    newStages[stageIndex - 1].items.push(item);
    setStages(newStages);
  }

  //add item to assembly line
  function addAssemblyLineItem(item) {
    const newStages = [...stages];
    newStages[0].items.push(item);
    //to add in stage 1 as well
    //newStages[1].items.push(item);
    setStages(newStages);
  }

  //remove item from assembly line
  function removeAssemblyLineItem(stageIndex, itemIndex) {
    const newStages = [...stages];
    newStages[stageIndex].items.splice(itemIndex, 1);
    setStages(newStages);
  }

  function leftClick(event) {
    event.preventDefault();
    //move to next stage
    const item = event.target.innerText;
    //find item in stages
    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];
      const itemIndex = stage.items.indexOf(item);
      if(itemIndex !== -1){
        if(i === stages.length -1){
          removeAssemblyLineItem(i, itemIndex);
          return;
        }
        else{
            moveItem(i, itemIndex);
        }
        return;
      }
    }
  }

  function rightClick(event) {
    event.preventDefault();
    //move to previous stage
    const item = event.target.innerText;
    //find item in stages
    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];
      const itemIndex = stage.items.indexOf(item);
      if(itemIndex !== -1){
        if(i==0){
          removeAssemblyLineItem(i, itemIndex);
          return;
        }
        else{
          moveItemBack(i, itemIndex);
          return;
        }
      }
    }
  }

  return (
    <div className="container min-vh-100">
      <h5>Assembly Line</h5>
      <AssemblyLine
        stages={stages[0].items}
        onAdd={addAssemblyLineItem}
        leftClick={(event)=>leftClick(event)}
        rightClick={(event)=>rightClick(event)}
        assemblyLine = {stages[0].items}
        setAssemblyLine = {addAssemblyLineItem}

      />
      <div className="stages d-flex gap-5">
        {stages.slice(1).map((stage, index) => (
          <Stage
            key={index}
            name={stage.name}
            items={stage.items}
            leftClick={(event)=>leftClick(event)}
            rightClick={(event)=>rightClick(event)}
            onMoveItem={moveItem}
            onMoveItemBack={moveItemBack}
            onRemoveItem={removeAssemblyLineItem}
            stageIndex={index}
          />
        ))}
      </div>
    </div>
  );

}

export default App;
