# otl-covenants
Leaflet map of restrictive covenants in property deeds in Connecticut in 1940s

## Demo with caption
https://ontheline.github.io/otl-covenants/index-caption.html

## Embedded in On The Line book http://ontheline.trincoll.edu
set iframe height 500px

## Credits
- Property deed research:
  - in West Hartford CT by Katie Campbell, Trinity College, Summer 2011
  - in Manchester CT by David K. Ware, “The Black and White of Greenway: Racially Restrictive Covenants in Manchester, Connecticut.” Paper submitted for University of Connecticut School of Law, January 2020, https://ssrn.com/abstract=3546228.
  - in Newington CT by David K. Ware, December 2023
  - in Hamden CT by June Gold, January 2024. See news article by Austin Mirmina, “When Hamden Woman Found Racist Covenant in Her Property Deed, Rooting Them Out Became a Mission,” CT Insider, November 25, 2023, https://web.archive.org/web/20231125103733/https://www.ctinsider.com/news/article/hamden-racist-property-deeds-spring-glen-18481356.php.
- Leaflet map by Ilya Ilyakou and Jack Dougherty, which replaces the 2012 UConn MAGIC Google Map http://magic.lib.uconn.edu/otl/doclink_covenant.html
- If you know of other restrictive covenants, by race or religion, elsewhere in Connecticut, contact the author [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## How to add data
- Scan documents, add metadata, and upload to `pdf` folder
- Upload `maps.geojson` file to free browser tool, such as <https://geojson.io>, to add polygon and metadata, then export to upload into this repository
- Also manually add metadata to table below, originally created by converting GeoJSON to CSV with <https://www.convertcsv.com/geojson-to-csv.htm> then to Markdown format with <https://www.tablesgenerator.com/>

## Historical sources
In the land records (stored in `pdf` folder), note that racially restrictive covenants sometimes only applied to specific property lots in a real estate development. But our boundary maps (stored in `maps.geojson`) show the general outline of the entire development as described in land records of that period. Note that our maps show general outlines and are not surveyor-level detailed maps.

| Town | Name | Source | Restrictor | Date |
|---|---|---|---|---|
| Hamden | Gilridge subdivision | vol. 205, pp. 40-42, and maps 224 and 54a | Joseph E. Maselli and Pasquale DeRosa | 1 Oct 1940 |
| Hamden | Village Farms subdivision | vol. 202, pp. 498-500, and map 221 | Y.H. and V.F. Larsen, Inc. | 12 Apr 1940 |
| Hamden | Wilmot subdivision | vol. 203, pp. 28-30, and map 130 | Thomas A. Laydon | 30 Apr 1940 |
| Manchester | Bowers Farm subdivision | vol. 136, pp. 386-387, and map SB2-19 | Sherwood G. Bowers | circa May 1940 |
| Manchester | Greenway Park subdivision | vol. 141, p. 93, and map SB2-36 | Lawrence A. Converse, President of Greenway, Inc. | 18 Nov 1940 |
| Manchester | Lakewood Circle subdivision | vol. 141, p. 270, and map SB2-18 | C. Elmore Watkins | 21 Jun 1941 |
| Newington | Center Village subdivision | vol. 41, pp. 226-27, and maps 64, 66, and 69 | Alfred E. Hanbury | 4 Oct 1939 |
| Newington | Mountain View Heights subdivision | vol. 41, pp. 293-94, and map 85; vol. 50, p. 55 | Arthur Olesen | 20 Dec 1939 |
| West Hartford | Bel-Crest subdivision | vol. 158, p. 7-8, and map 250 | Richard H. Bell, president of Bel-Crest, Inc. | 30 Oct 1940 |
| West Hartford | Dryad's Grove subdivision | vol. 164, pp. 342-43, and map 271 | Thomas Lawler, Inc. | 29 Jul 1941 |
| West Hartford | High Ledge Homes subdivision | vol. 152, pp. 224-25, and map 218 | Edward F. Hammel, President of High Ledge Homes, Inc. | 10 Jun 1940 |
| West Hartford | Hillside Homes subdivision | vol. 164, pp. 168-69 | Arnold Holder, Vice President, Hillside Homes Corporation | 26 May 1941 |
| West Hartford | Unnamed Asylum Avenue subdivision | vol. 154, p. 116; vol. 150, p. 456 | R.G. Bent, President of R.G. Bent Company | 17 Jun 1940 |

### Hamden
- Land Records, Town of Hamden, Connecticut
  - Gilridge development, vol. 205, pp. 40-42, 1 October 1940, and maps 224 and 54a, developed by Joseph E. Maselli and Pasquale DeRosa.
  - Village Farms development, vol. 202, pp. 498-500, 12 April 1940, and map 221, developed by Y.H. and V.F. Larsen, Inc.
  - Wilmot development, vol. 203, pp. 28-30, 30 April 1940, and map 130, developed by Thomas A. Laydon.
### Manchester
- Land Records, Town of Manchester, Connecticut
  - Bowers Farm development, vol. 136, pp. 386-387, circa May 1940, and map SB2-19, developed by Sherwood G. Bowers.
  - Greenway Park development, vol. 141, p. 93, 18 Nov 1940, and map SB2-36, developed by Lawrence A. Converse, President of Greenway, Inc.
  - Lakewood Circle development, vol. 141, p. 270, 21 June 1941, and map SB2-18, developed by C. Elmore Watkins.
### Newington
- Land Records, Town of Newington, Connecticut
  - Center Village development, vol. 41, pp. 226-27, 4 Oct 1939, and maps 64, 66, and 69, developed by Alfred E. Hanbury.
  - Mountain View Heights development, vol. 41, pp. 293-94, 20 Dec 1939 and map 85; vol. 50, p. 55, 18 Sept 1942, developed by Arthur Olesen.
### West Hartford
- Land Records, Town of West Hartford, Connecticut
  - Bel-Crest development, vol. 158, p. 7-8, 30 October 1940, and map 250, developed by Richard H. Bell, President of Bel-Crest, Inc.
  - Dryad’s Grove development, vol. 164, pp. 342-3, 29 July 1941, and map 271, developed by Thomas Lawler, Inc.
  - High Ledge Homes development, vol. 152, pp. 224-5, 10 June 1940, and map 218, developed by Edward F. Hammel, President of High Ledge Homes, Inc.
  - Hillside Homes development, vol. 164, pp. 168-9, 26 May 1941, and map 270, developed by Arnold Holser, Vice President, Hillside Homes Corporation.
  - Unnamed Asylum Avenue development, vol. 154, p. 116, 17 June 1940; vol. 150, p. 456, 20 May 1940, developed by the R.G. Bent, President of the R.G. Bent Company.
### Incomplete and Not Yet Mapped
- East Haddam, Connecticut, warranty deed recorded in land records of Dade County, Florida
  - Moodus Estates subdivision, lot 8, block 37, 21 December 1950, by Edward L. Parker of The Lake Realty Company (historical source submitted by Bob Rentenauer, 10 December 2019).
