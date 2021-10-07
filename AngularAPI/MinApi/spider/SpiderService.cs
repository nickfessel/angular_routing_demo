namespace MinApi.spider
{
  /// <summary>
  /// A service for spiders.
  /// </summary>
  public class SpiderService
  {
    List<Spider> spiders = new() {
      new Spider() { ImageUrl = @"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Plexippus_petersi_%28jumping_spider%29_on_a_human_finger_at_golden_hour.jpg/640px-Plexippus_petersi_%28jumping_spider%29_on_a_human_finger_at_golden_hour.jpg", Type = "Jumping Spider",  ID = 1, Family = "Salticidae", Genus = "Plexippus", Species = "P. petersi", Url = "https://en.wikipedia.org/wiki/Plexippus_petersi", Description = "P. petersi is a jumping spider from the family Salticidae. The male Plexippus petersi is between 6 and 10 mm (0.24 and 0.39 in) long and the female is slightly larger. The head bears four pairs of eyes, one pair is larger than the others, forward-facing and movable, while the remainder are small and fixed in position.[3] The cephalothorax is longer than it is wide and is brown with two darker reddish-brown bands on the dorsal surface. The abdomen is twice as long as it is wide and is yellowish-brown dorsally with two longitudinal darker brown bands which are broken posteriorly to give a pair of orangish spots on either side; the ventral surface is yellowish-brown and the spinnerets are greyish-brown. The pale parts of the abdomen are clad with whitish setae (bristles), and the darker areas are covered with brown setae. The legs are yellowish-brown, streaked with darker brown and darker near the joints, and have blackish-brown leading edges. There are scattered setae on the legs and the femur has a dense patch of brown hairs.[4] - from Wikipedia" },
      new Spider() { ImageUrl = @"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Phidippus_regius_4351.jpg/440px-Phidippus_regius_4351.jpg", Description = @"Adult males range from 6 to 18 mm (0.24–0.71 in) in body length and average 12 mm (0.47 in). Females range from 7 to 22 mm (0.28–0.87 in) and average 15 mm (0.59 in).

Males and females are easily differentiated. The males are always black with a pattern of white spots and stripes. Females often bear similar patterns to the males, but range in color from shades of gray to a vivid orange. The three spots on the back of the spider's abdomen often resemble a smiling face. Toward the end of the abdomen, there are usually two small round spots while there is a larger, triangle-shaped one closer to the cephalothorax, that looks like a mouth.

The regal jumping spider belongs to the genus Phidippus, a group of jumping spiders easily identified both by their relatively large size and their iridescent chelicerae. Among most members of Phidippus, these chelicerae are generally green, but in the case of P. regius they are often a blue-violet.

Phidippus regius is not a medically significant spider and is generally considered hesitant to bite. While bites rarely occur, symptoms are mostly limited to some local swelling and pain.", Family = "Salticidae", Genus = "Phidippus", Species = "P. regius", ID = 2, Type = "Jumping Spider", Url = ""}


    };
    public List<Spider> Get() => spiders;
    public Spider? GetDetails(int spiderID) => spiders.Where(s => s.ID == spiderID)?.FirstOrDefault();
  }
}
