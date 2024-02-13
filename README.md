# otl-covenants
Leaflet map of race restrictive covenants in property deeds in Connecticut, 1930s-40s

## Demo with caption
https://ontheline.github.io/otl-covenants/index-caption.html

## Embedded in On The Line book http://ontheline.trincoll.edu
set iframe height 450px

## Tables
- table-calculations.xlsx -- to sum totals by town and estimate percentage of homes built with covenants
- table-ct-land-records-online.csv -- a copy of working Google Sheet https://docs.google.com/spreadsheets/d/1t6UFa-y7HmiulmLxydlfXevpquFRF5JZD7OsBxdq0R4/edit#gid=0

## Credits
- Property deed research:
  - in West Hartford CT by Katie Campbell, Trinity College, Summer 2010
  - in Manchester CT by David K. Ware, “The Black and White of Greenway: Racially Restrictive Covenants in Manchester, Connecticut.” Paper submitted for University of Connecticut School of Law, January 2020, https://ssrn.com/abstract=3546228.
  - in Newington CT by David K. Ware, December 2023
  - in Hamden CT by June Gold, 2024. See news article by Austin Mirmina, “When Hamden Woman Found Racist Covenant in Her Property Deed, Rooting Them Out Became a Mission,” CT Insider, November 25, 2023, https://web.archive.org/web/20231125103733/https://www.ctinsider.com/news/article/hamden-racist-property-deeds-spring-glen-18481356.php.
- Leaflet map by Ilya Ilyakou and Jack Dougherty, which replaces the 2012 UConn MAGIC Google Map http://magic.lib.uconn.edu/otl/doclink_covenant.html
- If you know of other restrictive covenants by race or religion, anywhere in Connecticut, contact the author [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## Steps to add data
- Scan documents, add metadata, and upload to `pdf` folder
- Upload `maps.geojson` file to free browser tool, such as <https://geojson.io>, to add polygon and metadata, then export in `.geojson` format and upload into this repository
- Manually add metadata to table below, originally created by converting GeoJSON to CSV with <https://www.convertcsv.com/geojson-to-csv.htm> then to Markdown format with <https://www.tablesgenerator.com/>
- Update `table-calculations.xlsx` then update summary to table in OTL book

## Historical sources
In the land records (stored in `pdf` folder), note that racially restrictive covenants sometimes only applied to specific property lots in a real estate development. But our boundary maps (stored in `maps.geojson`) show the general outline of the entire development as described in land records of that period. Note that our maps show general outlines and are not surveyor-level detailed maps.

See text of racial restrictions, which varies slightly across covenants, in the `maps.geojson` file, and can be viewed or converted to table format.

| Town | Name | Type | Source | Restrictor | Date |
|---|---|---|---|---|---|
| Hamden | Beaver St | subdivision | vol. 199, pp. 589-90, and map 152a | Joseph E. Maselli and Pasquale DeRosa | 2 Jan 1940 |
| Hamden | Circular Ave | subdivision | vol. 214, pp. 453-55, and map 289A | Veggo F. Larsen | 20 June 1942 |
| Hamden | Colonial Village | subdivision | vol. 214, pp. 300-02, and map 286 | Albert G. Swanson and The Lomas & Nettleton Co. | 4 May 1942 |
| Hamden | Gilbert Homes | subdivision | vol. 211, pp. 84-86, and map 282 | V.F. Larsen, President of Gilbert Homes | 16 Sept 1941 |
| Hamden | Gilridge | subdivision | vol. 205, pp. 40-42, and maps 224 and 54a | Joseph E. Maselli and Pasquale DeRosa | 1 Oct 1940 |
| Hamden | Northside | subdivision | vol. 232, pp. 224-25, and maps 23 and 57a | Thomas A. Laydon | 11 Dec 1945 |
| Hamden | Rosedale | subdivision | vol. 205, pp. 326-28, and maps 225a | Thomas Amatruda, President of the Fusco-Amatruda Company | 1 Nov 1940 |
| Hamden | Village Farms | subdivision | vol. 202, pp. 498-500, and map 221 | Y.H. and V.F. Larsen, Inc. | 12 Apr 1940 |
| Hamden | Washington Manor | subdivision | vol. 211, pp. 424-26, and map 222a | Ferdinand VonBeren, President of Woodside Estates, Inc. | 16 Dec 1941 |
| Hamden | Willowdale | subdivision | vol. 211, pp. 179-81, and map 264 | Louis Baron, President of Empire Realty Company, Inc. | 1 Oct 1940 |
| Hamden | Wilmot | subdivision | vol. 203, pp. 28-30, and map 130 | Thomas A. Laydon | 30 Apr 1940 |
| Manchester | Bowers Farm | subdivision | vol. 136, pp. 386-387, and map SB2-19 | Sherwood G. Bowers | circa May 1940 |
| Manchester | Greenway Park | subdivision | vol. 141, p. 93, and map SB2-36 | Lawrence A. Converse, President of Greenway, Inc. | 18 Nov 1940 |
| Manchester | Lakewood Circle | subdivision | vol. 141, p. 270, and map SB2-18 | C. Elmore Watkins | 21 Jun 1941 |
| Newington | Center Village | subdivision | vol. 41, pp. 226-27, and maps 64, 66, and 69 | Alfred E. Hanbury | 4 Oct 1939 |
| Newington | Mountain View Heights | subdivision | vol. 41, pp. 293-94, and map 85; vol. 50, p. 55 | Arthur Olesen | 20 Dec 1939 |
| West Hartford | Bel-Crest | subdivision | vol. 158, p. 7-8, and map 250 | Richard H. Bell, president of Bel-Crest, Inc. | 30 Oct 1940 |
| West Hartford | Dryad's Grove | subdivision | vol. 164, pp. 342-43, and map 271 | Thomas Lawler, Inc. | 29 Jul 1941 |
| West Hartford | High Ledge Homes | subdivision | vol. 152, pp. 224-25, and map 218 | Edward F. Hammel, President of High Ledge Homes, Inc. | 10 Jun 1940 |
| West Hartford | Trout Brook Ridge | subdivision | vol. 164, pp. 168-69, and map 270 | Arnold Holder, Vice President, Hillside Homes Corporation | 26 May 1941 |
| West Hartford | Unnamed Asylum Avenue | subdivision | vol. 154, p. 116; vol. 150, p. 456 | R.G. Bent, President of R.G. Bent Company | 17 Jun 1940 |

### TODO East Haddam, Connecticut
- Not yet mapped: Moodus Estates subdivision, lot 8, block 37, warranty deed by Edward L. Parker of The Lake Realty Company, filed 5 Nov 1949 in Dade County Florida (after the 1948 Shelley decision), recorded 21 December 1950 (more than one year later) in East Haddam land records, book 66, page 103, document 77018571, no online image currently available, also need map image. Historical source submitted by Bob Rentenauer, 10 December 2019.

### TODO Lake Associations
- Investigate early ones below based late 1920s advertising with "restrictions" saved in subfolder
- Old Saybrook - Oyster Point - 10 June 1925 ad & 1 July 1928 ad (same page as Secret Lake below) both mention "reasonable restrictions"; property records online index: Property of Jim Brady, 1924; map file #84 lots 1-71, 1 June 1925; Oyster Point addition #1 map file #86 lots 1-56, 1 July 1925; plus four more maps with 1929-30 dates: file numbers 187D, 187E, 272E, 214; but map images from this period not online
- Canton - Secret Lake - 1 July 1928 ad mentions "wisely restricted"; property records online: Canton map #81 Secret Lake, land owned by JEB Lowell, 18 July 1928, see PDF downloaded; but no online index of sales from this period
- Glastonbury - Diamond Lake Co. - 29 July 1928 ad mentions "wise restrictions"; property records online: see 2-page PDF downloaded of index entries from Glastonbury land records; but no online images from this period
- Andover - Andover Lake --  8 July 1928 ad mentions "restricted lake" and 28 April 1929 ad features "Reasonable Restrictions Will Maintain the Desirability of this Development," with two writers who state that property had explicit prohibitions against Blacks and Jews; No land records online
- Coventry - Pine Lake Shores -- 2 Aug 1929 ad mentions "sensible restrictions"; see Coventry land record map images online https://www.searchiqs.com/CTCOV/SearchResultsMP.aspx
- Colchester - Lake Hayward - 8 Aug 1930 ad mentions "sensible restrictions"
- East Haddam - Lake Hayward - 12 Sept 1930 ad mentions "Suitable Membership and Building Restrictions"
- 1931-Hebron-LakeAmston.png
- 1931-Stafford-PineLakeShores.png
- 1937-Glastonbury-Diamond-Lake.png
