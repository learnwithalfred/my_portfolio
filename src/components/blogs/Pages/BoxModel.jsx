import React from 'react';
import BlogContainer from '../../BlogContainer';

const BoxModel = () => {
  return (
    <BlogContainer
      title={'The Css Box Model'}
      description={
        'In this tutorial, we will learn about the css box model and how it works'
      }
    >
      <div className="p-6 rounded-md shadow dark:shadow-gray-800">
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png"
            className="rounded-md"
            alt="pagination with tailwind css and will paginate gem"
          />
        </div>
        <div className="text-center mt-12">
          <h3 className="my-3 text-[26px] font-semibold">The Css Box Model</h3>
        </div>
        <div className="mt-6">
          <p className="text-dark-900">
            The box model is the foundation of CSS. It is the way that CSS
            treats each HTML element as a box. The box model is essentially a
            box that wraps around every HTML element. It consists of: margins,
            borders, padding, and the actual content.
          </p>
          <div>
            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">
                The Box Model Properties
              </h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The box model has four properties that allow us to define
                    the space around elements:
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    <span className="font-semibold text-2xl">margin</span> - The
                    margin property is used to create space around elements,
                    outside of any defined borders.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    <span className="font-semibold text-2xl">border</span> - The
                    border property is used to define a border around elements.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    <span className="font-semibold text-2xl">padding</span> -
                    The padding property is used to generate space around an
                    element's content, inside of any defined borders.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    <span className="font-semibold text-2xl">content</span> -
                    The content is the actual content of the box, where text and
                    images appear.
                  </p>
                </li>
              </ul>
            </div>

            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">Borders</h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The border property is used to define a border around
                    elements.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The border property is a shorthand property for:
                  </p>
                  <ul className="list-disc ml-8">
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          border-width
                        </span>{' '}
                        - Specified in pixels, ems, or percentages
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          border-style
                        </span>{' '}
                        - Specified in solid, dotted, dashed, double, groove, or
                        ridge etc.
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          border-color
                        </span>{' '}
                        - Specified in color names, hex codes, rgb, rgba, hsl,
                        hsla, or color keywords
                      </p>
                    </li>
                  </ul>
                </li>

                <li className="my-4">
                  <p className="text-dark-900">
                    The border property can have from one to four values.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify only one value, it will be applied to all
                    four sides.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify two values, the first one will be applied to
                    the top and bottom, and the second one will be applied to
                    the left and right.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify three values, the first one will be applied
                    to the top, the second one will be applied to the left and
                    right, and the third one will be applied to the bottom.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify four values, they will be applied to the top,
                    right, bottom, and left, in that order.
                  </p>
                </li>
              </ul>
            </div>
            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">Padding</h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The padding property is used to generate space around an
                    element's content, inside of any defined borders.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The padding property is a shorthand property for:
                  </p>
                  <ul className="list-disc ml-8">
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          padding-top
                        </span>{' '}
                        - Specifies the padding on the top of an element
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          padding-right
                        </span>{' '}
                        - Specifies the padding on the right side of an element
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          padding-bottom
                        </span>{' '}
                        - Specifies the padding on the bottom of an element
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">
                          padding-left
                        </span>{' '}
                        - Specifies the padding on the left side of an element
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The padding property can have from one to four values.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify only one value, it will be applied to all
                    four sides.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify two values, the first one will be applied to
                    the top and bottom, and the second one will be applied to
                    the left and right.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify three values, the first one will be applied
                    to the top, the second one will be applied to the left and
                    right, and the third one will be applied to the bottom.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    If you specify four values, they will be applied to the top,
                    right, bottom, and left, in that order.
                  </p>
                </li>
              </ul>
            </div>

            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">Margin</h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The margin property is used to generate space around an
                    element's content, outside of any defined borders.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The margin property is a shorthand property for:
                    margin-top,margin-bottom margin-right, margin-left.
                  </p>
                </li>

                <li className="my-4">
                  <p className="text-dark-900">
                    It works the same as padding, but in reverse (i.e. it
                    creates a gap between the element and its surrounding
                    elements).
                  </p>
                </li>
              </ul>
            </div>

            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">Width And Height</h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The width and height properties are used to set the width
                    and height of an element.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The width and height properties do not include padding,
                    borders, or margins; it sets the width and height of the
                    area inside the padding, border, and margin of the element.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    The width and height properties can have the following
                    values:
                  </p>
                  <ul className="list-disc ml-8">
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">auto</span> -
                        The browser calculates the width or height
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">length</span> -
                        Defines the width or height in px, pt, cm, etc.
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">%</span> -
                        Defines the width or height in % of the containing block
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">initial</span> -
                        Sets this property to its default value.
                      </p>
                    </li>
                    <li className="my-4">
                      <p className="text-dark-900">
                        <span className="font-semibold text-xl">inherit</span> -
                        Inherits this property from its parent element.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="py-8 my-8">
              <h5 className="font-semibold text-3xl">Border Box</h5>
              <ul className="list-none mt-4">
                <li className="my-4">
                  <p className="text-dark-900">
                    The border-box value of the box-sizing property specifies
                    that the width and height properties (and min/max
                    properties) includes the padding and border.
                  </p>
                </li>
                <li className="my-4">
                  <p className="text-dark-900">
                    Box sizing of 200px with a padding of 30px will result in a
                    total width of 260px.
                  </p>
                </li>
              </ul>
              <img
                src="/assets/images/box-sizing.png"
                alt="border"
                className="w-full"
              />

              <p className="text-dark-900 mt-4">
                The image above shows the difference between the content-box and
                border-box values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
};

export default BoxModel;
