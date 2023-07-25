import { useMutation } from "@tanstack/react-query";

// Return captilized string
export const capitalizeFirstLetter = (str: string) => {
  const string = str && str.toString();
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
};

export const isArrayLength = (array: any[]): boolean => {
  return Array.isArray(array) && array.length > 0;
};

export const useMutationWithHandlers = (mutationFunction: any) => {
    return function (options : any) {
        return useMutation(mutationFunction, {
            onSuccess: () => {
                if (options.onSuccess) {
                    options.onSuccess();
                }
                if (options.refetch) {
                    options.refetch();
                }
                if (options.setShowAlert) {
                    options.setShowAlert({
                        message: "Success",
                        isError: false,
                    });
                }
                if (options.setActiveTab) {
                    options.setActiveTab(null);
                }
            },
            onError: () => {
                if (options.onError) {
                    options.onError();
                }
                if (options.setShowAlert) {
                    options.setShowAlert({
                        message: "Something went wrong. Please try again.",
                        isError: true,
                    });
                }
            },
        });
    };
};