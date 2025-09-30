const SearchForm = ({ handleSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    console.log(topic);
    handleSearch(topic);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
