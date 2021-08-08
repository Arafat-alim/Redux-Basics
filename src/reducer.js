//[] initial store
lastIndex = 0;

export default function reducer(state = [], action) {
  // if-else condition
  //   if (action.type === "bugAdded") {
  //     return [
  //       ...state,
  //       {
  //         id: ++lastIndex,
  //         description: "",
  //         resolved: false,
  //       },
  //     ];
  //   } else if (action.type === "bugRemoved") {
  //     return state.filter((bugs) => bugs.id !== action.payload.id);
  //   }
  //   return state;
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastIndex,
          description: action.type.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bugs) => bugs.id !== action.payload.id);

    default:
      return state;
  }
}
