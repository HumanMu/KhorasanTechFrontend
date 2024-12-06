import { Center, VStack, Text, Stack } from "@chakra-ui/react";
import ImageSlider from "../components/slider/ImageSlider";



const PlayBazaarPolicy = () => {
  return (
    <Center marginBottom={100}>
      <VStack>
        <ImageSlider />
        <Text {...PageHeader} > PlayBazaar Policy</Text>
        <Stack spacing={2} margin='0 20vw 0 20vw'>
          <Text {...TextHeader}>Privacy Policy for Play Bazaar</Text>
          <Text>
            At Play Bazaar, we prioritize your privacy and are committed to ensuring the security of your personal information. 
            This privacy policy outlines how we handle, store, and protect your data when you use our app.</Text>


          <Text {...TextHeader}>Information Collection and Storage</Text>
          <Text marginBottom={"0px"}>When using the Play Bazaar app, we may collect certain personal information, 
            including but not limited to your name, email address, and other relevant information necessary for account creation and app functionality. 
            All collected information is securely stored in our database, which is hosted on Firestore, a cloud storage service owned and operated by Google.
          </Text>


          <Text {...TextHeader}>Data Security and Third-Party Access</Text>
          <Text>We do not share, sell, or distribute your personal information with any third parties. 
            Your information is used only to provide services through the PlayBazaar app. Your data is stored on Firebase servers in Frankfurt, Germany.
            While your data is stored on Firestore, owned by Google, this does not grant Google any rights to use your personal information for purposes unrelated to our app. 
            Google is responsible for maintaining the security of its cloud services, and we ensure that your information is protected in accordance with Google’s strict security measures.
          </Text>

          <Text {...TextHeader}>Terms of Use</Text>
          <Text>
            At Play Bazaar, we strive to provide our users with the best possible experience by fostering a safe, respectful, and enjoyable community. To maintain this standard, we have implemented specific rules for the use of groups and private messaging. 
            It is strictly prohibited to engage in hate speech, discrimination, harassment, or share explicit or offensive content. Discussions involving racism, sexism, or other sensitive topics are not allowed and may result in consequences such as temporary or permanent restrictions on group participation or private messaging. 
            By using these features, you agree to follow these guidelines and contribute to a positive and respectful environment for everyone.
          </Text>

          <Text {...TextHeader}>Deleting Your Play Bazaar Account</Text>
          <p>
              If you want to delete your Play Bazaar account, you should follow these steps:
            </p>
            <ol>
              <li>1. Login to the Play Bazaar app with your phone.</li>
              <li>2. Press the menu icon (the 3 lines at the top right corner).</li>
              <li>3. Choose <strong>Settings</strong>.</li>
              <li>4. At the top of the page, choose <strong>Account</strong>.</li>
              <li>5. Under the "Danger Zone," press <strong>Delete my account</strong>.</li>
              <li>6. Enter your password.</li>
              <li>7. Press <strong>Confirm</strong>.</li>
            </ol>
            <p>
              Now your account is deleted. If this didn’t work for you, please send us an
              email, and we will gladly help you with your problem.
            </p>


          <Text {...TextHeader}>Policy Agreement</Text>
          <Text>
            By using the Play Bazaar app, you acknowledge and accept this privacy policy. We encourage you to review this policy regularly, as continued use of the app indicates your acceptance of any changes or updates.
          </Text>

          <Text {...TextHeader}>Policy Updates</Text>
          <Text>
            We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page, and your continued use of the app constitutes your acceptance of such changes.
          </Text>

    
          <Text {...TextHeader}>Contact Us</Text>
          <Text>If you have any questions or concerns regarding this privacy policy, please contact us at kh.techn@gmail.com</Text>



        </Stack>
      </VStack>
    </Center>     
  );
}

export default PlayBazaarPolicy;

const PageHeader = {
  fontSize: {base: '16px', sm: '25px', md: '35px', lg: '45px'},
  fontWeight: "bold",
}

const TextHeader = {
  fontSize: 'md',
  fontWeight: 'bold',
  marginTop: '30px',
  marginBottom: '0px',
}
