import { ApplicationContext } from "@/context";
import { reducerTypeNames } from "@/data/context";
import { ISession, ITraining } from "@/types";
import { useContext, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import AttentesForm from "../commons/AttentesForm";

const AttentesMain = ({
  training,
  session,
}: {
  training: ITraining;
  session: ISession;
}) => {
  const { state, dispatch } = useContext(ApplicationContext);
  useEffect(() => {
    dispatch({ type: reducerTypeNames.SET_ACTUAL_TRAINING, payload: training });
    console.log("dispatched");
    dispatch({ type: reducerTypeNames.SET_ACTUAL_SESSION, payload: session });
  }, []);
  return state.actualSession ? (
    <section>
      <div className="lg:flex gap-5 mx-auto px-3 container my-6 space-y-10 lg:space-y-0">
        <div className="w-full text-center lg:text-left lg:w-1/2 space-y-6 lg:space-y-8">
          <header>
            <p className="text-md lg:text-lg">
              Vos suggestions pour la formation
            </p>
            <h2 className="text-3xl lg:text-5xl font-heading fontF-heading">
              {state.actualTraining?.title}
            </h2>
          </header>
          <div>
            <p className="text-md lg:text-lg mt-2 px-2 lg:px-0">
              {state.actualSession.form_view_description}
            </p>
          </div>
        </div>
        <aside className="w-full lg:w-1/2 shrink-0 mx-auto rounded-md border-2 border-gray p-2 md:px-2 md:p-6 md:py-0 bg-white shadow-md">
          <AttentesForm />
        </aside>
      </div>
    </section>
  ) : null;
};

export { AttentesMain };
