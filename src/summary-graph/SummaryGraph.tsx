import React, { useState } from "react";
import { KpiBox } from "./KpiBox";
import { SummaryTypes,initialState,StateType } from "./SummaryGraphTypes";
import "./SummaryGraph.scss";

type InvoiceGraphProps = {
  data: any;
  onBoxClick(id: string): void;
};

export const SummaryGraph = ({
  data: summaryData,
  onBoxClick,
}: InvoiceGraphProps) => {
  const [state,setState] = useState<StateType>(initialState);
  const [hover,setHover] = useState<StateType>(initialState);
  const [opacity,setOpacity] = useState('');

  const getAmount = (summaryData: any, object: string) => {
    let obj = summaryData?.[object];
    debugger
    if (obj?.value === "NaN") {
      return "$0.0";
    } else {
      return `$${obj?.value || 0.0}`;
    }
  };

  const onClickEvent = (kpi: string) => {
    setOpacity(!state[kpi]?'dim-color':"");
    setState({
      ...initialState,
      [kpi]: !state[kpi]
    })
    onBoxClick(kpi);
  };

  const setHoverState=(kpi: string,value:boolean)=>{
    setHover({
      ...initialState,
      [kpi]: value
    })
  }
  const handleMouseLeave = (kpi: string) => {
    setHoverState(kpi,false);
  };

  const handleMouseEnter = (kpi: string) => {
    setHoverState(kpi,true);
  };

  return (
    <div className="flex-box col ma">
      <div className="flex-box row">
        <KpiBox
          customClass={
            (state[SummaryTypes.A] || hover[SummaryTypes.A])
              ? "invoice-amount-box invoice-amount-box-clicked"
              : `invoice-amount-box ${opacity}`
          }
          title={"A"}
          amountValue={getAmount(summaryData, SummaryTypes.A)}
          sType={SummaryTypes.A}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
        <KpiBox
          customClass={
            (state[SummaryTypes.A] || hover[SummaryTypes.A] || state[SummaryTypes.B] || hover[SummaryTypes.B])
              ? "green-payments-box green-payments-box-clicked"
              : `green-payments-box ${opacity}`
          }
          title={"B"}
          amountValue={getAmount(summaryData, SummaryTypes.B)}
          sType={SummaryTypes.B}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
        <KpiBox
          customClass={
            (state[SummaryTypes.A] || hover[SummaryTypes.A] || state[SummaryTypes.C] || hover[SummaryTypes.C])
              ? "green-payments-box green-payments-box-clicked sm-payments-box-zi"
              : `green-payments-box ${opacity}` 
          }
          title={"C"}
          amountValue={getAmount(summaryData, SummaryTypes.C)}
          sType={SummaryTypes.C}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
        <KpiBox
          customClass={(state[SummaryTypes.D] || hover[SummaryTypes.D])?
            "light-green-payments-box light-green-payments-box-clicked ml-5p"
            :`light-green-payments-box ml-5p ${opacity}`}
          title={"D"}
          sType={SummaryTypes.D}
          amountValue={getAmount(summaryData, SummaryTypes.D)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-29p">
        <KpiBox
          customClass={
            (state[SummaryTypes.A] || hover[SummaryTypes.A])
              ? "shortages-box shortages-box-parent-clicked"
              : (state[SummaryTypes.E] || hover[SummaryTypes.E])
              ? "shortages-box shortages-box-clicked scale-unit"
              : `shortages-box ${opacity}`
          }
          title={"E"}
          amountValue={getAmount(summaryData, SummaryTypes.E)}
          sType={SummaryTypes.E}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-57p mb-20p">
        <KpiBox
          customClass={
            (state[SummaryTypes.E] || hover[SummaryTypes.E])
              ? "shortages-nclaimed-box shortages-nclaimed-box-parent-clicked"
              : (state[SummaryTypes.F] || hover[SummaryTypes.F])?
              "shortages-nclaimed-box shortages-nclaimed-box-clicked"
              :
              `shortages-nclaimed-box ${opacity}`
            }
          title={"F"}
          sType={SummaryTypes.F}
          amountValue={getAmount(summaryData, SummaryTypes.F)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.F] || hover[SummaryTypes.F] 
              ||
             state[SummaryTypes.G] || hover[SummaryTypes.G])
              ? "scope-box scope-box-clicked isnc-box-zi"
              : `scope-box ${opacity}`}
          title={"G"}
          sType={SummaryTypes.G}
          amountValue={getAmount(summaryData, SummaryTypes.G)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.F] || hover[SummaryTypes.F]
              ||
             state[SummaryTypes.H] || hover[SummaryTypes.H])
              ? "scope-box scope-box-clicked oosnd-box-zi"
              :  `scope-box ${opacity}`}
          title={"H"}
          sType={SummaryTypes.H}
          amountValue={getAmount(summaryData, SummaryTypes.H)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.F] || hover[SummaryTypes.F]
              ||
             state[SummaryTypes.I] || hover[SummaryTypes.I])
              ? "scope-box scope-box-clicked oossfi-box-zi"
              :  `scope-box ${opacity}`}
          title={"I"}
          sType={SummaryTypes.I}
          amountValue={getAmount(summaryData, SummaryTypes.I)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-88p">
        <KpiBox
          customClass={
            (state[SummaryTypes.E] || hover[SummaryTypes.E])
            ? "shortages-claimed-box shortages-claimed-box-parent-clicked"
            : (state[SummaryTypes.J] || hover[SummaryTypes.J])?
            "shortages-claimed-box shortages-claimed-box-clicked"
            :
            `shortages-claimed-box ${opacity}`}
          title={"J"}
          sType={SummaryTypes.J}
          amountValue={getAmount(summaryData, SummaryTypes.J)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.J] || hover[SummaryTypes.J])
            ? "ideoclick-winning-box ideoclick-winning-box-parent-clicked"
            :  (state[SummaryTypes.K] || hover[SummaryTypes.K])
            ? "ideoclick-winning-box ideoclick-winning-box-clicked"
            : `ideoclick-winning-box ${opacity}`
          }
          title={"K"}
          amountValue={getAmount(summaryData, SummaryTypes.K)}
          sType={SummaryTypes.K}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.J] || hover[SummaryTypes.J]
              ||
            state[SummaryTypes.L] || hover[SummaryTypes.L])
            ? "rejected-open-stmt rejected-open-stmt-clicked"
            : `rejected-open-stmt ${opacity}`
            }
          title={"L"}
          sType={SummaryTypes.L}
          amountValue={getAmount(summaryData, SummaryTypes.L)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-116p">
        <KpiBox
          customClass={
            (state[SummaryTypes.J] || hover[SummaryTypes.J]
              ||
            state[SummaryTypes.M] || hover[SummaryTypes.M])
            ? "pending-open-box pending-open-box-clicked"
            : `pending-open-box ${opacity}`
            }
          title={"M"}
          sType={SummaryTypes.M}          
          amountValue={getAmount(summaryData, SummaryTypes.M)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={
            (state[SummaryTypes.K] || hover[SummaryTypes.K] ||
              state[SummaryTypes.N] || hover[SummaryTypes.N])
            ? "dark-orange-box dark-orange-box-clicked"
            :`dark-orange-box ${opacity}`
          }
          title={"O"}
          sType={SummaryTypes.N}          
          amountValue={getAmount(summaryData, SummaryTypes.N)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-144p">
        <KpiBox
          customClass={(state[SummaryTypes.J] || hover[SummaryTypes.J] ||
            state[SummaryTypes.O] || hover[SummaryTypes.O])
            ? "pending-open-box pending-open-box-clicked pnoos-box-zi"
            : `pending-open-box ${opacity}`
            }
          title={"O"}
          sType={SummaryTypes.O}
          amountValue={getAmount(summaryData, SummaryTypes.O)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={  (state[SummaryTypes.K] || hover[SummaryTypes.K]
            ||
            state[SummaryTypes.P] || hover[SummaryTypes.P])
            ? "dark-orange-box dark-orange-box-clicked"
            :`dark-orange-box ${opacity}`
          }
          title={"K"}
          sType={SummaryTypes.P}
          amountValue={getAmount(summaryData, SummaryTypes.P)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
      <div className="flex-box row ml-172p">
        <KpiBox
          styles={{ backgroundColor: "white" ,opacity: 0}}
          customClass={""}
          title={""}
          amountValue={""}
          sType={""}
          boxClick={() => {
            console.log();
          }}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />

        <KpiBox
          customClass={(state[SummaryTypes.K] || hover[SummaryTypes.K] ||
            state[SummaryTypes.Q] || hover[SummaryTypes.Q])
            ? "dark-orange-box dark-orange-box-clicked"
            :`dark-orange-box ${opacity}`
          }
          title={"Q"}
          sType={SummaryTypes.Q}
          amountValue={getAmount(summaryData, SummaryTypes.Q)}
          boxClick={onClickEvent}
          onHoverIn={handleMouseEnter}
          onHoverOut={handleMouseLeave}
        />
      </div>
    </div>
  );
};
