type TModificators = Record<string, boolean>;

const filterClassesByValue = (modificators: TModificators) => {
  return Object.entries(modificators).reduce(
    (acc: string[], [className, isActive]: [string, boolean]) => {
      if (isActive) {
        acc.push(className);
      }
      return acc;
    },
    [] as string[]
  );
};

const getClassNames = (
  mainClass: string,
  modificators: TModificators,
  additional: string[]
) => {
  return [mainClass, ...additional, filterClassesByValue(modificators)];
};

export default getClassNames;
