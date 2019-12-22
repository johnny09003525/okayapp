# okayapp

#npm 6.9.0
#node 8.15.0
#react-native-cli: 2.0.1
#react-native: 0.61.5


if cannot compile the demo app

1.rm -rf node_modules && npm install
Check the /node_modules and react-native should be there now

2.rm ios/Pods

3.pod install

2.react-native link

3.react-native start --reset-cache

4.react-native run-ios

OR

bulid using Xcode

Requirement
1	Property List page: Show the list of properties with a favorite button.  (image_1.png)
2	A menu button named “Favorites” should be on the property list page. (image_1.png)
3	User can click on the favorite button on any property. (image_1.png)
4	The favorite button turns active when the property is saved as favorite. (image_1.png)
5	A bubble with the current favorite properties count will show on the side of the “Favorites” button. (image_1.png)
6	When “Favorites” button is clicked, a popup contains the list of favorite properties will show. (image_1.png)
7	User can remove property from favorite popup and also from the property list. (image_2.png)
