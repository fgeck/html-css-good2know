<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";
import FooterGridElement from "./FooterGridElement.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";

export default defineComponent({
  name: "Footer",
  components: {
    NavItem,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    FooterGridElement,
  },
});
</script>

<template>
  <div class="border-t border-grey-100 my-16">
    <div
      class="container grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] mt-8 text-grey"
    >
      <div class="py-4">
        <FooterGridElement class="flex flex-col">
          <a href="#">
            <img
              src="img/omnifood-logo.png"
              alt="omnifood logo"
              class="h-[1.125rem] mb-4"
            />
          </a>
          <div class="text-[#777]">
            <ul class="flex gap-4 mb-4">
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
            <p class="text-sm mt-auto">
              Copyrigt &copy; 2023 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
        </FooterGridElement>
      </div>

      <FooterGridElement text="Contact Us">
        <address class="text-[#777]">
          <p class="text-sm mb-2">
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </p>
          <p>
            <a href="tel:415-201-6370">415-201-6370</a>
            <br />
            <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
          </p>
        </address>
      </FooterGridElement>
      <nav>
        <FooterGridElement text="Account">
          <ul class="text-[#777] flex flex-col gap-2">
            <li>
              <NavItem to="/register" name="Create Account" />
            </li>
            <li>
              <NavItem to="/login" name="Sign In" />
            </li>
            <li>
              <NavItem to="/ios" name="iOS App" />
            </li>
            <li>
              <NavItem to="/android" name="Android App" />
            </li>
          </ul>
        </FooterGridElement>
      </nav>
      <nav>
        <FooterGridElement text="Contact Us">
          <ul class="text-[#777] flex flex-col gap-2">
            <li>
              <NavItem to="/about" name="About Omnifood" />
            </li>
            <li>
              <NavItem to="/businesses" name="For Business" />
            </li>
            <li>
              <NavItem to="/partners" name="Cooking partners" />
            </li>
            <li>
              <NavItem to="/careers" name="Careers" />
            </li>
          </ul>
        </FooterGridElement>
      </nav>
      <nav>
        <FooterGridElement text="Resources">
          <ul class="text-[#777] flex flex-col gap-2">
            <li>
              <NavItem to="/recipes" name="Recipe directory" />
            </li>
            <li>
              <NavItem to="/help" name="Help center" />
            </li>
            <li><NavItem to="/privacy" name="Privacy & terms" /></li>
          </ul>
        </FooterGridElement>
      </nav>
    </div>
  </div>
</template>
