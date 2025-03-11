declare module '@/pages/js/register' {
  export const handleSchoolInputChange = (input, setSchoolSuggestions, schools) => {
    if (input.length > 0) {
      const suggestions = schools.filter(school =>
        school.toLowerCase().includes(input.toLowerCase())
      );
      setSchoolSuggestions(suggestions);
    } else {
      setSchoolSuggestions([]);
    }
  };
}
