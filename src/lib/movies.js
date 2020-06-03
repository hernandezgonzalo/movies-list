// move watched movies down the list or move to its original place
export const sortWatchedMovies = (a, b) => {
  if (a.watched && b.watched) return 0;
  else if (!a.watched && !b.watched) return b.index - a.index;
  else return a.watched ? 1 : -1;
};
