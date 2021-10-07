namespace MinApi.person
{
  /// <summary>
  /// A service for people.
  /// </summary>
  public class PersonService
  {
    public List<Person> Get()
    {
      return new List<Person>() { new Person() { FirstName = "Nick", LastName = "Fessel" } };
    }
  }
}
