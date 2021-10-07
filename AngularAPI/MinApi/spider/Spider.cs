namespace MinApi.spider
{
  /// <summary>
  /// Represents details about our eight-legged friends.
  /// </summary>
  public class Spider
  {
    public int? ID { get; set; }
    public string? Family { get; set; }
    public string? Genus { get; set; }
    public string? Species { get; set; }
    public string? Type { get; set; }
    public string? Url { get; set; }
    public string? ImageUrl { get; set; }
    public string? Description { get; set; }
  }
}
