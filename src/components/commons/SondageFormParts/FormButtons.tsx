import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction } from "react";
import { UseMutationResult } from "react-query";
import PulseLoader from "react-spinners/PulseLoader";

const FormButtons = <U,>({
  maxPageCount,
  mutation,
  setPageIndex,
  pageIndex,
}: {
  maxPageCount: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  pageIndex: number;
  mutation: UseMutationResult<any, unknown, U, unknown>;
}) => {
  return (
    <div className="flex gap-3 items-center w-full justify-stretch">
      {pageIndex > 0 && (
        <Button
          variant={"primary"}
          type="button"
          className="w-full"
          disabled={mutation.isLoading}
          onClick={() => setPageIndex((prev) => prev - 1)}
        >
          Précédent
        </Button>
      )}
      {pageIndex < maxPageCount - 1 && (
        <Button
          variant={"primary"}
          type="button"
          className="w-full"
          disabled={mutation.isLoading}
          onClick={() => setPageIndex((prev) => prev + 1)}
        >
          Suivant
        </Button>
      )}
      {pageIndex === maxPageCount - 1 && (
        <Button
          variant={"primary"}
          type="submit"
          className="w-full"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <div className="flex gap-2 items-end">
              <span>Chargement</span>
              <PulseLoader color="white" size={5} />
            </div>
          ) : (
            "Transmettre"
          )}
        </Button>
      )}
    </div>
  );
};

export default FormButtons;
