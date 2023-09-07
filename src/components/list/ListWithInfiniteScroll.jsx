import PropTypes from "prop-types";
export const ListWithInfiniteScroll = ({ id, label, data, loadMoreData }) => {};

ListWithInfiniteScroll.prototypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loadMoreData: PropTypes.func,
};
